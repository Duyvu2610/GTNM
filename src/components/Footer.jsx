import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { GrYoutube } from 'react-icons/gr'
function Footer() {
    return (
        <div className='bg-black text-white px-4 py-4'>
            <div className=" grid grid-cols-2">
                <ul className='flex flex-col gap-4 items-center'>
                    <li className='font-bold text-xl'>Mua hàng</li>
                    <li>Dòng sản phẩm JBL Quantum</li>
                    <li>Chuyên nghiệp</li>
                    <li>Dòng tai nghe JBL Live</li>
                    <li>Dàn âm thanh gia đình</li>
                    <li>Không dây</li>
                </ul>
                <ul className='flex flex-col gap-4 items-center'>
                    <li className='font-bold text-xl'>Hỗ trợ</li>
                    <li>Mua hàng chính hãng</li>
                    <li>Hệ thông phân phối</li>
                    <li>Hỗ trợ sản phẩm</li>
                </ul>
            </div>
            <div className="my-8 pt-4 border-t border-white">
                <p className='font-bold text-xl pb-2 text-center cursor-pointer' onClick={() => window.scrollTo(0, 0)}>Vshop</p>
                <div className="flex items-center justify-around">
                    <BsFacebook size={26} />
                    <AiFillInstagram size={26} />
                    <GrYoutube size={26} />
                    <BsTwitter size={26} />
                </div>
            </div>
        </div>
    )
}

export default Footer