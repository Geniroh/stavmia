"use client"
import { Col, Row } from 'antd'
import Link from 'next/link'
import { FaUser } from "react-icons/fa";
import React from 'react';
import { usePathname } from 'next/navigation';


const navLinks = [
    {
        href: "/",
        name: "Home"
    }, 
    {
        href: "/discussion",
        name: "Discussion forum"
    },
    {
        href: "/analytics",
        name: "Analytics"
    }
]


const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <>
        <Row className='flex items-center min-h-[90px] text-[18px] border-b px-4'>
            <Col xs={12} md={8}>
                {/* Logo goes here */}
            </Col>
            <Col xs={12} md={8} className='hidden md:block'>
                <div className='flex gap-6 text-[16px] justify-center font-semibold'>
                    {
                        navLinks.map(link => {
                            const isActive = pathname.startsWith(link.href);
                            return <Link href={link.href} className={isActive ? "text-myblack" : "text-mygray"} key={link.name}>{link.name}</Link>
                        })
                    }
                </div>
            </Col>
            <Col xs={12} md={8} >
                <div className='flex items-center gap-4 justify-end cursor-pointer'>
                    <button className='py-2 px-7 bg-myblack text-white rounded-2xl'>Upload Innovation</button>
                    <div className='flex gap-2 items-center py-2 px-7 border rounded-2xl'>
                        <span className='font-bold'>DanielAdedoyin</span>
                        <span><FaUser /></span>
                    </div>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default Navbar