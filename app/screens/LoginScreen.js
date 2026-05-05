import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { supabase } from '../../lib/supabase';
import { Colors, Spacing, Radius, FontSize } from '../../lib/theme';
import PrimaryButton from '../../components/PrimaryButton';

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    let isActive = true;
    (async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (isActive && data?.session) {
          router.replace('/home');
        }
      } catch {
        // Ignore and allow user to manually login.
      }
    })();
    return () => {
      isActive = false;
    };
  }, [router]);

  const onLogin = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password;
    if (!trimmedEmail) {
      setErrorMsg('Please enter your email.');
      return;
    }
    if (!trimmedPassword) {
      setErrorMsg('Please enter your password.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password: trimmedPassword,
      });
      if (error) throw error;
      router.replace('/home');
    } catch (e) {
      setErrorMsg(e?.message ?? 'Failed to log in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: Colors.bgWhite }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={[styles.container, { paddingTop: insets.top + Spacing.lg }]}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Log in to your account</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="you@example.com"
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          placeholder="Your password"
          onChangeText={setPassword}
        />

        {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

        {loading ? (
          <ActivityIndicator color={Colors.primary} style={{ marginVertical: Spacing.md }} />
        ) : (
          <PrimaryButton title="Log In" onPress={onLogin} />
        )}

        <TouchableOpacity style={styles.linkButton} onPress={() => router.push('/register')}>
          <Text style={styles.linkText}>New here? Create an account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  title: {
    fontSize: FontSize.hero,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: FontSize.large,
    color: Colors.textSecondary,
    marginBottom: Spacing.xxl,
  },
  label: {
    width: '100%',
    fontSize: FontSize.medium,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.medium,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    fontSize: FontSize.large,
    marginBottom: Spacing.md,
    backgroundColor: Colors.bgWhite,
  },
  errorText: {
    width: '100%',
    color: Colors.danger,
    marginBottom: Spacing.md,
  },
  linkButton: {
    paddingVertical: Spacing.sm,
    marginTop: Spacing.sm,
  },
  linkText: {
    color: Colors.primary,
    fontSize: FontSize.medium,
    fontWeight: '600',
  },
});