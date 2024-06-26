import {
    Box,
    Flex,
    HStack,
    Button,
    Text,
    Link,
    Stack,
    IconButton,
    useDisclosure,
    Avatar
} from '@chakra-ui/react';

import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/ParentContext';
import { Link as Ln } from 'react-router-dom';

const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'How it Works', path: '/how' },
    { name: 'FAQs', path: 'faqs' }
];



export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { loginWithRedirect, isAuthenticated, user, logout, setUserProfile, userProfile } = useContext(AppContext)

    useEffect(() => {
        setUserProfile(user)
    }, [isAuthenticated, user])

    return (
        <Box px={"10%"} bg={'rgba(255, 255, 255, 0.62)'} alignItems="center" backdropFilter='blur(20px)' pos={"fixed"} width={"100%"} zIndex={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
                <Ln to="/">
                    <svg width="159" height="80" viewBox="0 0 184 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 58.5C25 40.5507 39.5507 26 57.5 26V26C75.4493 26 90 40.5507 90 58.5V75.7059C90 78.7677 90 80.2986 89.7222 81.5672C88.7197 86.1446 85.1446 89.7197 80.5672 90.7222C79.2986 91 77.7677 91 74.7059 91H57.5C39.5507 91 25 76.4493 25 58.5V58.5Z" fill="#53CE75" />
                        <g filter="url(#filter0_f_66_1154)">
                            <path d="M47.8299 37.4467V66.3132C47.8299 69.3181 48.6717 71.705 50.3553 73.4739C52.0603 75.2214 54.4472 76.0952 57.516 76.0952C60.5636 76.0952 62.9292 75.2214 64.6128 73.4739C66.3177 71.705 67.1702 69.3181 67.1702 66.3132V37.4467H76.8244V67.2722C76.8244 72.387 75.0662 76.5214 71.5497 79.6756C68.0546 82.8084 63.3767 84.3748 57.516 84.3748C51.634 84.3748 46.9348 82.8084 43.4184 79.6756C39.9233 76.5214 38.1757 72.387 38.1757 67.2722V37.4467H47.8299Z" fill="black" fill-opacity="0.25" />
                        </g>
                        <path d="M49.6961 41.1862V65.3732C49.6961 67.891 50.4015 69.891 51.8122 71.3731C53.2407 72.8374 55.2407 73.5695 57.8121 73.5695C60.3656 73.5695 62.3477 72.8374 63.7584 71.3731C65.1869 69.891 65.9012 67.891 65.9012 65.3732V41.1862H73.9903V66.1768C73.9903 70.4624 72.5171 73.9267 69.5708 76.5695C66.6423 79.1944 62.7227 80.5069 57.8121 80.5069C52.8836 80.5069 48.9461 79.1944 45.9998 76.5695C43.0713 73.9267 41.607 70.4624 41.607 66.1768V41.1862H49.6961Z" fill="white" />
                        <path d="M94.3535 57.6934C94.3535 55.9004 95.0742 54.4648 96.5156 53.3867C97.957 52.2969 99.8848 51.752 102.299 51.752C104.654 51.752 106.547 52.3027 107.977 53.4043C109.406 54.5059 110.139 55.9707 110.174 57.7988H105.445C105.387 57.0371 105.07 56.4395 104.496 56.0059C103.934 55.5723 103.178 55.3555 102.229 55.3555C101.338 55.3555 100.623 55.543 100.084 55.918C99.5566 56.2812 99.293 56.7676 99.293 57.377C99.293 58.291 100.113 58.9414 101.754 59.3281L105.357 60.1016C107.244 60.5234 108.598 61.1387 109.418 61.9473C110.25 62.7441 110.666 63.8457 110.666 65.252C110.666 67.1035 109.893 68.5918 108.346 69.7168C106.799 70.8418 104.777 71.4043 102.281 71.4043C99.7969 71.4043 97.8105 70.8535 96.3223 69.752C94.834 68.6504 94.0195 67.168 93.8789 65.3047H98.8887C99.0176 66.1016 99.3809 66.7168 99.9785 67.1504C100.588 67.584 101.402 67.8008 102.422 67.8008C103.395 67.8008 104.156 67.625 104.707 67.2734C105.27 66.9102 105.551 66.418 105.551 65.7969C105.551 65.3164 105.375 64.9355 105.023 64.6543C104.672 64.3613 104.074 64.1152 103.23 63.916L99.75 63.1426C96.1523 62.3223 94.3535 60.5059 94.3535 57.6934ZM121.688 55.5488C120.574 55.5488 119.643 55.9297 118.893 56.6914C118.154 57.4531 117.738 58.4258 117.645 59.6094H125.643C125.584 58.4023 125.191 57.4238 124.465 56.6738C123.75 55.9238 122.824 55.5488 121.688 55.5488ZM125.713 65.2344H130.424C130.143 67.0859 129.217 68.5801 127.646 69.7168C126.088 70.8418 124.148 71.4043 121.828 71.4043C118.934 71.4043 116.66 70.5371 115.008 68.8027C113.367 67.0684 112.547 64.6895 112.547 61.666C112.547 58.6543 113.367 56.252 115.008 54.459C116.648 52.6543 118.857 51.752 121.635 51.752C124.365 51.752 126.539 52.6074 128.156 54.3184C129.773 56.0293 130.582 58.3203 130.582 61.1914V62.7559H117.592V63.0723C117.592 64.4199 117.984 65.5156 118.77 66.3594C119.566 67.1914 120.615 67.6074 121.916 67.6074C122.854 67.6074 123.662 67.3965 124.342 66.9746C125.021 66.541 125.479 65.9609 125.713 65.2344ZM133.236 71V52.1562H138.193V55.5488H138.299C138.627 54.3535 139.178 53.4395 139.951 52.8066C140.725 52.1738 141.668 51.8574 142.781 51.8574C143.32 51.8574 143.807 51.9219 144.24 52.0508V56.5684C143.76 56.3691 143.139 56.2695 142.377 56.2695C141.111 56.2695 140.127 56.6387 139.424 57.377C138.721 58.1152 138.369 59.1465 138.369 60.4707V71H133.236ZM163.576 52.1562L157.107 71H151.307L144.785 52.1562H150.287L154.207 66.4648H154.312L158.215 52.1562H163.576ZM173.297 55.5488C172.184 55.5488 171.252 55.9297 170.502 56.6914C169.764 57.4531 169.348 58.4258 169.254 59.6094H177.252C177.193 58.4023 176.801 57.4238 176.074 56.6738C175.359 55.9238 174.434 55.5488 173.297 55.5488ZM177.322 65.2344H182.033C181.752 67.0859 180.826 68.5801 179.256 69.7168C177.697 70.8418 175.758 71.4043 173.438 71.4043C170.543 71.4043 168.27 70.5371 166.617 68.8027C164.977 67.0684 164.156 64.6895 164.156 61.666C164.156 58.6543 164.977 56.252 166.617 54.459C168.258 52.6543 170.467 51.752 173.244 51.752C175.975 51.752 178.148 52.6074 179.766 54.3184C181.383 56.0293 182.191 58.3203 182.191 61.1914V62.7559H169.201V63.0723C169.201 64.4199 169.594 65.5156 170.379 66.3594C171.176 67.1914 172.225 67.6074 173.525 67.6074C174.463 67.6074 175.271 67.3965 175.951 66.9746C176.631 66.541 177.088 65.9609 177.322 65.2344Z" fill="black" />
                        <defs>
                            <filter id="filter0_f_66_1154" x="0.275719" y="-0.453346" width="114.449" height="122.728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="18.95" result="effect1_foregroundBlur_66_1154" />
                            </filter>
                        </defs>
                    </svg>
                </Ln>
                <HStack spacing={8} alignItems="center">
                    <HStack as="nav" color="#353535" spacing={20} d={{ base: 'none', md: 'flex' }} alignItems="center">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} {...link} onClose={onClose} />
                        ))}
                    </HStack>
                </HStack>

                {isAuthenticated ?

                    <Box display={"flex"} gap={4} alignItems="center">
                        <Link to={"/profile"}>
                            <Avatar
                                as={Link}
                                border="3px solid #4BB96A"
                                rounded="full"
                                src={userProfile?.picture}
                            />
                        </Link>

                        <Button bg="transparent"
                            size="md"
                            color="black"
                            border="3px solid #4BB96A"
                            borderRadius="20px"
                            _hover={{
                                bg: "#4BB96A", border: "3px solid #4BB96A", filter: "drop-shadow(0 0 5px #4BB96A)",
                                transition: "background-color 0.3s ease", color: "white"
                            }}
                            d={{ base: 'none', md: 'block' }}
                            px={8}
                            onClick={logout}
                        >
                            Log out
                        </Button>
                    </Box> :
                    <Box display={"flex"} gap={4}>
                        <Button bg="transparent"
                            size="md"
                            color="#353535"
                            _hover={{ bg: "transparent" }}
                            borderRadius="20px"
                            d={{ base: 'none', md: 'block' }}
                            px={8}
                            onClick={() => loginWithRedirect()}
                        >
                            Log in
                        </Button>
                        <Button bg="#4BB96A"
                            width="38%"
                            color="white"
                            borderRadius="14px"
                            _hover={{ bg: "rgba(63, 157, 90, 1)" }}
                            d={{ base: 'none', md: 'block' }}
                            px={8}
                            onClick={() => loginWithRedirect()}
                        >
                            Sign Up
                        </Button>

                    </Box>
                }
            </Flex>

            {/* Mobile Screen Links */}
            {isOpen ? (
                <Box pb={4} d={{ base: 'inherit', md: 'none' }}>
                    <Stack as="nav" spacing={2}>
                        {navLinks.map((link, index) => (
                            <NavLink key={index} {...link} onClose={onClose} />
                        ))}
                        <Text fontWeight="semibold" color="gray.500">
                            Community
                        </Text>
                        <Stack pl={2} spacing={1} mt={'0 !important'}>
                            {dropdownLinks.map((link, index) => (
                                <NavLink key={index} {...link} onClose={onClose} />
                            ))}
                        </Stack>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}

const NavLink = ({ name, path, onClose }) => {
    return (
        <Link
            href={path}
            lineHeight="inherit"
            fontWeight="600"
            _hover={{
                textDecoration: 'none',
                color: '#4BB96A'
            }}
            onClick={() => onClose()}
        >
            {name}
        </Link>
    );
};