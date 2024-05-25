<template>
    <div>
        home

        <h1> Send an email </h1>
        <button @click="sendEmail">Send</button>
    </div>
</template>

<script setup>


    const config = useRuntimeConfig()


    async function sendEmail2() {
        console.log('sending email')

        const { data } = await useFetch('/api/email', {
            method: 'post',
            body: { }
        })
        console.log(data)
    }

    const newsletterHTML = `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>AI generierte Fotos Newsletter</title></head><body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;"><table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;"><tr><td align="center" bgcolor="#4CAF50" style="padding: 20px 0;"><h1 style="color: #ffffff; font-size: 24px; margin: 0;">Entdecken Sie AI generierte Fotos</h1></td></tr><tr><td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;"><p style="font-size: 18px; margin: 0;">Hallo,</p><p style="font-size: 18px; margin: 20px 0 30px 0;">Wir freuen uns, Ihnen eine neue Möglichkeit vorzustellen, wie Sie mit AI generierten Fotos Geld verdienen können. Laden Sie diese Bilder auf Plattformen wie Adobe Stock hoch und verdienen Sie mit jedem Download Geld!</p><p style="font-size: 18px; margin: 0;">Unsere Funktion, die Ihnen 100 AI generierte Fotos zur Verfügung stellt, wird bald verfügbar sein. Melden Sie sich jetzt für unseren Newsletter an, um als Erster informiert zu werden, wenn die Funktion live geht.</p></td></tr><tr><td bgcolor="#ffffff" align="center" style="padding: 20px 0;"><a href="https://deine-webseite.de/newsletter-anmeldung" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; font-size: 18px; border-radius: 5px;">Jetzt anmelden</a></td></tr><tr><td bgcolor="#4CAF50" style="padding: 10px 0;"><p style="color: #ffffff; font-size: 14px; text-align: center; margin: 0;">&copy; 2024 Deine Webseite. Alle Rechte vorbehalten.</p></td></tr></table></body></html>`;


    const sendEmail = async () => {
        console.log('sending email: ' + config.public.BREVO_API_KEY)
        return await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                accept: "application/json",
                "api-key": config.public.BREVO_API_KEY,
                "content-type": "application/json",
            },
            body: JSON.stringify({
            sender: {
            name: `Me Niko`,
            email: "digidesignadobe@gmail.com",
            },
            to: [{ email: "nnatik77@mail.ru", name: "nnatik77@mail.ru" }],
            subject: "This is a sample email",
            htmlContent:newsletterHTML
            }),
        })
    }


</script>

<style lang="scss" scoped>
</style>