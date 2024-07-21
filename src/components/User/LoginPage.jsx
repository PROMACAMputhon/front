import React from 'react';

function LoginPage() {
    return (
        <div>
            <h1>로그인</h1>
            <h4>학번</h4>
            <input type={"text"}/>
            <h4>비밀번호</h4>
            <input type={"text"}/>
            <button>로그인</button>
        </div>
    );
}

export default LoginPage;