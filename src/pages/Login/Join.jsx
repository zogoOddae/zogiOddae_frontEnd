import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, ShadowBox, TitleSub } from '../../components/Atom';

function Join() {
  return (
    <>
      <div className="w-500 m-auto mt-20 mb-40">
        <ShadowBox addclass="h-full">
          <TitleSub addclass="text-center mb-5">회원가입</TitleSub>
          <Input id="email" placeholder="이메일 주소" />
          <Input id="pw" placeholder="비밀번호" />
          <Input id="pwCheck" placeholder="비밀번호 확인" />
          <div className="flex items-center justify-between gap-3">
            <Input id="phone" placeholder="휴대폰 번호" addclass="w-3/5" />
            <Button addclass="w-2/5 mt-3">인증번호 발송</Button>
          </div>
          <div className="flex items-center justify-between gap-3">
            <Input id="phoneCheck" placeholder="인증번호" addclass="w-3/5" />
            <Button addclass="w-2/5 mt-3">확인</Button>
          </div>
          <Input id="nickname" placeholder="닉네임" />
          <div className="mt-6 border-y border-b-0">
            {/* <Button addclass="w-full mt-6"><Link to="/complete">회원가입</Link></Button> */}
            <Link to="/complete" className="btn btn-primary w-full mt-6">회원가입</Link>
          </div>
        </ShadowBox>
      </div>
    </>
  );
}

export default Join;