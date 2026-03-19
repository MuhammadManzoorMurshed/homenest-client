
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
import logo from './../../assets/logo.svg';

export function Footer() {
    return (
        <FlowbiteFooter container>
            <div className="w-full max-w-360 mx-auto">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="text-6xl">
                        <FooterBrand className="font-fredoka font-semibold cursor-pointer transition-all duration-100 hover:scale-95 hover:text-teal-700"
                            href="https://flowbite.com"
                            src={logo}
                            alt="Flowbite Logo"
                            name="HomeNest"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterTitle className="text-base" title="contact details" />
                            <FooterLinkGroup col>
                                <FooterLink href="#">Flowbite</FooterLink>
                                <FooterLink href="#">Tailwind CSS</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-base" title="Terms & 
                            Conditions" />
                            <FooterLinkGroup col>
                                <FooterLink href="#">Github</FooterLink>
                                <FooterLink href="#">Discord</FooterLink>
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
                    <FooterCopyright href="#" by="HomeNest" year={2026} />
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
