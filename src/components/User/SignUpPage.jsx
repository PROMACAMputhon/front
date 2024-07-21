import React from 'react';

function SignUpPage() {
    return (
        <div>
            <h1>회원가입</h1>
            <h4>학번</h4>
            <input type={"text"}/>
            <h4>이름</h4>
            <input type={"text"}/>
            <h4>비밀번호</h4>
            <input type={"text"}/>
            <button>가입하기</button>
        </div>
    );
}

export default SignUpPage;