import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-22">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo and Vision */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              LOGO
            </Link>
            <p className="text-sm text-gray-600">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* About Column */}
          <div className="space-y-4 ml-20">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-600 hover:text-gray-900"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/featured"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link
                  href="/business-relation"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Bussiness Relation
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div className="space-y-4 ml-20">
            <h3 className="text-lg font-semibold">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/events"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/podcast"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  href="/invite"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Invite a friend
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="space-y-4 ml-20">
            <h3 className="text-lg font-semibold">Socials</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col justify-between md:flex-row">
            <p className="text-sm text-black">©2025. All rights reserved</p>
            <div className="mt-4 flex space-x-6 md:mt-0 text-black">
              <Link href="/#" className="text-sm  hover:text-gray-900">
                Privacy & Policy
              </Link>
              <Link href="/#" className="text-sm hover:text-gray-900">
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
