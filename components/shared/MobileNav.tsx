import React from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const MobileNav = () => {
  return (
    <div className="md:hidden px-12 py-8 bg-dark-100 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <Drawer direction="top">
          <DrawerTrigger asChild>
            <Image
              src="/assets/shared/tablet/icon-hamburger.svg"
              alt="nav-menu"
              height={20}
              width={20}
              className="object-cover"
            />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          height={150}
          width={150}
        />
      </div>
      <Image
        src="/assets/shared/desktop/icon-cart.svg"
        alt="logo"
        height={25}
        width={25}
      />
    </div>
  );
};

export default MobileNav;
