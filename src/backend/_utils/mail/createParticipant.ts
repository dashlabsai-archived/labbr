import sgMail from '@sendgrid/mail'

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export default async (
  firstName: string,
  lastName: string,
  email: string
): Promise<void> => {
  if (!process.env.SENDGRID_API_KEY) {
    return
  }

  await sgMail.send({
    to: {
      name: `${firstName} ${lastName}`,
      email
    },
    from: {
      name: 'LABBR',
      email: 'register@goc.labbr.app'
    },
    dynamicTemplateData: {
      email
    },
    templateId: process.env.CREATE_PARTICIPANT_TEMPLATE_ID
  })
}
