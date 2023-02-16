import axios from "axios";

export const contact = async (name, email, number, subject, message) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/contact',
            data: {
                name,
                email,
                number,
                subject,
                message
            }
        })
        alert('Submitted successfully.')

    } catch (err) {
        alert(err.response.data.message)
    }
}