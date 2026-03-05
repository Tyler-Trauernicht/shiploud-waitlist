'use client';

import { useState } from 'react';
import { Check, Loader2, ArrowRight, Sparkles, Calendar, FolderOpen } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Logo } from '@/components/logo';
import { Editable } from '@siteproof/react';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('waitlist').insert({ email });

      if (error) {
        if (error.code === '23505') {
          setErrorMessage('This email is already on the waitlist!');
        } else {
          throw error;
        }
        setStatus('error');
        return;
      }

      setStatus('success');
      setEmail('');
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo size={32} />
              <Editable field="home.header.brand_name" type="text" label="Brand Name">
                <span className="text-xl font-semibold text-gray-900">ShipLoud</span>
              </Editable>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <Editable field="home.header.status_badge" type="text" label="Status Badge Text">
                <span>Coming Soon</span>
              </Editable>
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Headline */}
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <Editable field="home.hero.main_headline" type="text" label="Hero Main Headline">
                <span>Your project has a story.</span>
              </Editable>
              <br />
              <Editable field="home.hero.highlight_text" type="text" label="Hero Highlight Text">
                <span className="text-indigo-500">Share it.</span>
              </Editable>
            </h1>

            {/* Subheadline */}
            <Editable field="home.hero.subtitle" type="text" label="Hero Subtitle">
              <p className="mt-6 text-lg text-gray-600 leading-8">
                ShipLoud turns your GitHub repos into ready-to-post content for X and LinkedIn. Stop staring at a blank tweet.
              </p>
            </Editable>

            {/* Email Form */}
            <div className="mt-10">
              {status === 'success' ? (
                <div className="mx-auto max-w-md rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-4">
                  <div className="flex items-center justify-center gap-3 text-emerald-700">
                    <Check className="h-5 w-5" />
                    <Editable field="home.hero.success_message" type="text" label="Success Message">
                      <span className="font-medium">You&apos;re on the list! We&apos;ll be in touch.</span>
                    </Editable>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      className="flex-1 rounded-md border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-shadow"
                      disabled={status === 'loading'}
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <Editable field="home.hero.cta_button" type="text" label="CTA Button Text">
                            <span>Join Waitlist</span>
                          </Editable>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                  {status === 'error' && errorMessage && (
                    <p className="mt-3 text-sm text-red-500">{errorMessage}</p>
                  )}
                  <Editable field="home.hero.disclaimer_text" type="text" label="Disclaimer Text">
                    <p className="mt-4 text-sm text-gray-500">
                      Join 1+ developers. No spam, ever.
                    </p>
                  </Editable>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <Editable field="home.features.section_title" type="text" label="Features Section Title">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                What you&apos;ll get
              </h2>
            </Editable>
            <Editable field="home.features.section_subtitle" type="text" label="Features Section Subtitle">
              <p className="mt-4 text-base text-gray-600">
                Everything you need to market your projects without becoming a marketer
              </p>
            </Editable>
          </div>

          <Editable field="home.features.items" type="collection" label="Feature Items">
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <Sparkles className="h-6 w-6 text-indigo-500" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">AI-Powered Content</h3>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Generate tweets, threads, and LinkedIn posts directly from your README and code.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <Calendar className="h-6 w-6 text-indigo-500" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">Smart Scheduling</h3>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Plan your content calendar with AI-suggested optimal posting times.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <FolderOpen className="h-6 w-6 text-indigo-500" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">Content Library</h3>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  All your generated content in one place. Copy, edit, or schedule anytime.
                </p>
              </div>
            </div>
          </Editable>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Logo size={24} />
              <Editable field="home.footer.brand_name" type="text" label="Footer Brand Name">
                <span className="font-medium text-gray-900">ShipLoud</span>
              </Editable>
            </div>
            <Editable field="home.footer.copyright_text" type="text" label="Copyright Text">
              <p className="text-sm text-gray-500">
                © 2025 ShipLoud. Built for developers who ship.
              </p>
            </Editable>
          </div>
        </div>
      </footer>
    </div>
  );
}