import { transporter } from '../../config/email.config'
import {Contact_Reply_Template ,Contact_ThankYou_Template} from '../email/EmailTemplate'
import nodemailer from 'nodemailer'

export const sendContactReplyEmail = async (email: string, name: string,subject:string, message: string) => {
    try {
        const response = await transporter.sendMail({
            from: '"Saurabh Profile" <sybooks1000@gmail.com>',

            to: "saurabhsyadav2005@gmail.com", // list of receivers
            subject: "Contact Reply", // Subject line
            text: "Contact Reply", // plain text body
            html: Contact_Reply_Template.replace("{name}", name).replace("{email}", email).replace("{subject}", subject).replace("{message}", message)
        })
        // console.log('Email send Successfully',response)
    } catch (error) {
        console.log('Email error', error)
    }
}
export const sendContactReplyEmailSender = async (email: string, name: string,subject:string, message: string) => {
    try {
        const response = await transporter.sendMail({
            from: '"Saurabh Profile" <sybooks1000@gmail.com>',

            to: email, // list of receivers
            subject: "Contact Reply", // Subject line
            text: "Contact Reply", // plain text body
            html: Contact_ThankYou_Template.replace("{name}", name).replace("{email}", email).replace("{subject}", subject).replace("{message}", message)
        })
        // console.log('Email send Successfully',response)
    } catch (error) {
        console.log('Email error', error)
    }
}
