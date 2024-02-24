import * as React from "react";

export function SendTransaction() {
    async function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const to = formData.get("address");
        const value = formData.get("value");
    }
    return (
        <form onSubmit={submit}>
            <input name='address' placeholder='0xA0Cf…251e' required />
            <input name='value' placeholder='0.05' required />
            <button type='submit'>Send</button>
        </form>
    );
}
