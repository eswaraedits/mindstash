import BrainIcon from "../icons/BrainIcon";
export function Footer() {
  return (
    <footer className="bg-white relative z-1">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
            <div className="flex flex-col gap-6 lg:max-w-sm">
              <div className="flex items-center gap-1">
              <BrainIcon/>
                <span className="text-xl font-medium text-text-primary font-brand">
                  mindstash<span className="nav-logo-tm">™</span>
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-0.5">
                  <p className="text-base font-semibold text-text-primary">
                    We'd love to hear from you!
                  </p>
                  <p className="text-sm text-text-secondary">
                    You will get a response within 24 hours
                  </p>
                </div>

                <form className="flex flex-col sm:flex-row gap-2">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address for waitlist
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 sm:flex-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:w-52"
                    required
                  />
                </form>
              </div>
            </div>

            <div className="w-full lg:w-auto grid grid-cols-2 gap-4 sm:gap-8 lg:gap-16 text-center lg:text-left">
              <div>
                <h3 className="text-[10px] sm:text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  Disclaimer
                </h3>
                <ul className="mt-2.5 sm:mt-3 space-y-2">
                  <li><a className="text-xs sm:text-sm text-text-secondary hover:text-text-primary" href="/terms">Terms & Conditions</a></li>
                  <li><a className="text-xs sm:text-sm text-text-secondary hover:text-text-primary" href="/privacy">Privacy & Policies</a></li>
                  <li><a className="text-xs sm:text-sm text-text-secondary hover:text-text-primary" href="#">FAQ</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] sm:text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  Company
                </h3>
                <ul className="mt-2.5 sm:mt-3 space-y-2">
                  <li><a className="text-xs sm:text-sm text-text-secondary hover:text-text-primary" href="#">About</a></li>
                  <li><a className="text-xs sm:text-sm text-text-secondary hover:text-text-primary" href="mailto:support@promptshop.co">Contact</a></li>
                  <li><a className="text-xs sm:text-sm text-text-secondary hover:text-text-primary" href="#">Contribute</a></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-text-tertiary">
                © 2026 mindstash. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" max-w-7xl mx-auto text-center font-brandNew font-black leading-none text-transparent bg-clip-text  bg-gradient-to-b from-gray-300  to-transparent text-6xl sm:text-[6rem] md:text-[8rem] lg:text-[12rem] overflow-hidden h-24 sm:h-32 lg:h-40">MindStash</h1>
    </footer>
  );
}
