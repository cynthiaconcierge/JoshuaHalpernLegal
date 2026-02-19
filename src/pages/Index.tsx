import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import {
  Scale,
  AlertCircle,
  Sparkles,
  FileCheck,
  PenLine,
  Building2,
  Home,
  MessageCircle,
  UserRound,
  Users,
  DollarSign,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const ANIMATION_DELAY = 120;

const Index = () => {
  const whatYouGet = [
    { icon: FileCheck, label: "Contract review" },
    { icon: PenLine, label: "Contract drafting" },
    { icon: FileCheck, label: "Help before signing agreements" },
    { icon: Building2, label: "Help setting up or structuring your business" },
    { icon: Home, label: "Real estate contract review" },
    { icon: MessageCircle, label: "Answers when questions come up" },
    { icon: UserRound, label: "Direct access to your lawyer" },
  ];

  const whoFor = [
    "Business owners",
    "Founders",
    "Real estate investors",
    "People signing contracts regularly",
  ];

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* ⸻ Hero */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_rgba(148,163,184,0.15),_transparent)]" />
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-slate-300/20 rounded-full blur-3xl animate-float" style={{ animationDuration: "5s" }} />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl animate-float" style={{ animationDuration: "6s", animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200/80 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <Scale className="w-4 h-4 text-slate-900" />
              For business owners
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] tracking-tight font-serif animate-fade-in-up"
              style={{ animationDelay: `${ANIMATION_DELAY}ms` }}
            >
              A Lawyer You Can Actually Use — Without Hourly Billing
            </h1>
            <p
              className="text-lg md:text-xl text-slate-600 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: `${ANIMATION_DELAY * 2}ms` }}
            >
              Flat monthly pricing. Fast answers. Real legal help for business owners who don't want surprises.
            </p>
            <div
              className="pt-2 animate-fade-in-up"
              style={{ animationDelay: `${ANIMATION_DELAY * 3}ms` }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-xl shadow-slate-900/25 hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-0.5 transition-all duration-300 animate-cta-glow"
              >
                Book Free Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-4 text-sm text-slate-500 max-w-md mx-auto">
                We'll answer your questions and give you clear pricing. No obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⸻ Problem */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-tight">
                Most business owners avoid calling their lawyer.
              </h2>
            </div>
            <div className="space-y-3 pl-1 border-l-2 border-slate-200 ml-6 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              <p className="text-slate-600">Because every question costs money.</p>
              <p className="text-slate-600">So you wait.</p>
              <p className="text-slate-600">You guess.</p>
              <p className="text-slate-600">You use templates.</p>
              <p className="text-slate-600">You sign things you shouldn't.</p>
            </div>
            <p
              className="text-slate-700 text-lg font-medium mt-8 animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              Not because you want to — because hourly billing makes it painful to ask.
            </p>
          </div>
        </div>
      </section>

      {/* ⸻ Solution */}
      <section className="py-20 md:py-28 bg-slate-50/80 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-tight">
                We charge one monthly fee. That's it.
              </h2>
            </div>
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <p className="text-slate-600">You can reach out whenever you need.</p>
              <p className="text-slate-600">No clock. No surprise bills. No hesitation.</p>
              <p className="text-slate-700 text-lg font-medium">You get real legal help when it matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⸻ What You Get */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 font-serif tracking-tight animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              What You Get
            </h2>
            <ul className="space-y-5">
              {whatYouGet.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${60 + i * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 font-medium pt-1.5">{item.label}</span>
                  </li>
                );
              })}
            </ul>
            <p
              className="mt-10 text-slate-600 font-semibold flex items-center gap-2 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Fast responses. Clear answers.
            </p>
          </div>
        </div>
      </section>

      {/* ⸻ Who This Is For */}
      <section className="py-20 md:py-28 bg-slate-50/80 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div
              className="flex items-center gap-3 mb-10 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-tight">
                Who This Is For
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              {whoFor.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-sm shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <p
              className="text-slate-600 italic animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              If you only need help once, this probably isn't for you.
            </p>
            <p className="text-slate-700 font-semibold mt-2 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              This is for ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* ⸻ About Josh */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-8 p-8 md:p-10">
                <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
                  <img
                    src="/joshua-halpern-hero.png"
                    alt="Josh Halpern"
                    className="w-32 h-40 md:w-40 md:h-52 rounded-xl object-cover object-top shadow-md border border-slate-200/80"
                  />
                </div>
                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-tight">
                    About Josh
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Josh Halpern is a licensed attorney focused on helping business owners protect what they're building.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    He built this firm to remove hourly billing so clients can actually use their lawyer.
                  </p>
                  <p className="text-slate-700 font-semibold pt-2">No games. No billing clock.</p>
                  <p className="text-slate-700 font-semibold">Just clear legal help.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⸻ Pricing */}
      <section className="py-20 md:py-28 bg-slate-50/80 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white">
                <DollarSign className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-tight">
                Pricing
              </h2>
            </div>
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              <p className="text-slate-600">Monthly plans available based on your needs.</p>
              <p className="text-slate-800 font-bold text-lg">
                Most clients invest between $1,000 and $2,500 per month.
              </p>
              <p className="text-slate-600">We'll give you exact pricing on your call.</p>
              <p className="text-slate-700 font-semibold">No surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⸻ Final CTA */}
      <section className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,_rgba(51,65,85,0.4),_transparent_50%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-white border border-white/10 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <Phone className="w-7 h-7" />
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-tight animate-fade-in-up"
              style={{ animationDelay: "80ms" }}
            >
              Book a Free Call
            </h2>
            <p
              className="text-slate-300 text-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              We'll talk about your business and see if this is a fit.
            </p>
            <p
              className="text-slate-300 text-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              You'll leave knowing exactly how it works and what it costs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-slate-100 hover:scale-[1.02] transition-all duration-300 shadow-xl animate-fade-in-up"
              style={{ animationDelay: "280ms" }}
            >
              Book Free Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
        >
          <Phone className="w-5 h-5" />
          Book Free Call
        </Link>
      </div>
    </div>
  );
};

export default Index;
