import {
    Footer as FlowbiteFooter,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from './../../assets/logo.svg';

export function Footer() {
    return (
        <FlowbiteFooter container className="rounded-bl-none rounded-br-none dark:bg-gray-900">
            <div className="w-full max-w-360 mx-auto">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="text-6xl">
                        <FooterBrand
                            as={Link}
                            className="font-fredoka font-semibold cursor-pointer transition-all duration-100 hover:scale-95 hover:text-teal-700 dark:hover:text-teal-400 dark:text-gray-100"
                            href="/"
                            src={logo}
                            alt="HomeNest Logo"
                            name="HomeNest"
                        />
                        <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400 mt-3">
                            Helping you find the perfect place to call home — browse, list, and connect with confidence.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterTitle className="text-base" title="Quick Links" />
                            <FooterLinkGroup col>
                                <FooterLink as={Link} to="/">Home</FooterLink>
                                <FooterLink as={Link} to="/all-properties">All Properties</FooterLink>
                                <FooterLink as={Link} to="/add-properties">Add Property</FooterLink>
                                <FooterLink as={Link} to="/my-properties">My Properties</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-base" title="Contact Us" />
                            <FooterLinkGroup col>
                                <FooterLink href="mailto:support@homenest.com">support@homenest.com</FooterLink>
                                <FooterLink href="tel:+8801234567890">+880 1234-567890</FooterLink>
                                <FooterLink href="#">Chattogram, Bangladesh</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-base" title="Legal" />
                            <FooterLinkGroup col>
                                <FooterLink href="#">Privacy Policy</FooterLink>
                                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="/" by="HomeNest" year={2026} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon href="#" icon={BsFacebook} />
                        <FooterIcon href="#" icon={BsInstagram} />
                        <FooterIcon href="#" icon={BsTwitterX} />
                        <FooterIcon href="#" icon={BsGithub} />
                        <FooterIcon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </FlowbiteFooter>
    );
}