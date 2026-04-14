import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { nombre, email, telefono, empresa, mensaje } = await request.json();
  
  try {
    await resend.emails.send({
      from: 'CybSec <contacto@tudominio.com>',
      to: ['tucorreo@empresa.com'],
      subject: `Nuevo contacto de ${nombre} - CybSec`,
      replyTo: email,
      html: `
        <h2>Nuevo mensaje desde CybSec</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No especificado'}</p>
        <p><strong>Empresa:</strong> ${empresa || 'No especificada'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
  }
}