import React from 'react';

import { Button, Title, TitleSub, ShadowBox } from '../../components/Atom';

// Pay
import BookInfo from '../../components/Pay/BookInfo';
import Price from '../../components/Pay/Price';

// assets
import roomImg from '../../assets/img_room.jpeg';

function Cart() {
  const rommList = [
    {
      imgSrc: roomImg,
      roomName: '마포 신라스테이',
      date: '2월 25일 ~ 2월 26일',
      day: 1,
      num: 2,
      price: 80000,
    },
    {
      imgSrc: roomImg,
      roomName: '그랜드 하얏트 제주',
      date: '3월 1일 ~ 3월 3일',
      day: 2,
      num: 4,
      price: 300000,
    },
    {
      imgSrc: roomImg,
      roomName: '강릉 세인트존스호텔',
      date: '5월 5일 ~ 5월 8일',
      day: 2,
      num: 5,
      price: 110000,
    },
  ];
  return (
    <div className="container">
      <Title text="장바구니" />
      <div className="mt-10 grid grid-cols-2 gap-10 items-start">
        <ShadowBox>
          <TitleSub addclass="mb-2" text="숙소 정보" />
          <BookInfo roomdata={rommList} />
        </ShadowBox>
        <ShadowBox>
          <TitleSub addclass="mb-2" text="금액 정보" />
          <Price roomdata={rommList} />
          <Button addclass="mt-3 btn-block" text="예약하기" />
        </ShadowBox>
      </div>
    </div>
  );
}

export default Cart;
