import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

import { Dialog } from "@headlessui/react";

interface Props {
  altReferenceTitle: string;
  classNames?: string;
  logo?: string;
  navigation: Array<{
    name: string;
    href: string;
  }>;
  socialIcons: Array<{
    name: string;
    href: string;
    icon: React.FC<React.ComponentProps<"svg">>;
  }>;
}

export default function HeaderSimpleCentered({
  altReferenceTitle,
  classNames,
  logo,
  navigation,
  socialIcons,
}: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`text-white ${classNames ? classNames : ""}`}>
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white transition-colors duration-200 ease-in-out hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <a href="#" className="-m-1.5 p-1.5 text-white">
          <span className="sr-only">{altReferenceTitle}</span>
          {logo ? (
            <img className="w-auto h-20" src={logo} alt={altReferenceTitle} />
          ) : (
            <span>{altReferenceTitle}</span>
          )}
        </a>
        <div className="flex justify-end flex-1">
          {/* Social media icons here */}
          {socialIcons.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="ml-4 text-white transition-colors duration-200 ease-in-out hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full px-6 py-6 overflow-y-auto bg-gray-900">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <a href="#" className="-m-1.5 p-1.5 text-gray-50">
              <span className="sr-only">Your Company</span>
              {logo ? (
                <img
                  className="w-auto h-20"
                  src={logo}
                  alt={altReferenceTitle}
                />
              ) : (
                <span>{altReferenceTitle}</span>
              )}
            </a>
            <div className="flex justify-end flex-1"></div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-800"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
