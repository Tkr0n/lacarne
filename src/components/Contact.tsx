"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser';
import "../styles/globals.css"

export default function ContactFormTwoColumn() {

  useEffect(() => emailjs.init(import.meta.env.PUBLIC_KEY));
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs
      .sendForm(import.meta.env.PUBLIC_SERVICE_ID, import.meta.env.PUBLIC_TEMPLATE, formRef.current ?? "", {
        publicKey: import.meta.env.PUBLIC_KEY,
      })
      .then(
        () => {
          //console.log('SUCCESS!');
          setFormData({ name: "", email: "", phone: "", message: "" })
        },
        (error) => {
          //console.log('FAILED...', error);
        },
      );
  }

  return (
    <div className="container relative z-10 mx-auto p-4">
      <Card className="w-full max-w-4xl md:max-h-[600px] mx-auto">
        <CardHeader>
          <CardTitle>Contáctanos</CardTitle>
          <CardDescription>Ubícanos en el mapa y ponte en comunicación con nuestro equipo.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 space-y-2">
              <Label>Ubicación</Label> <br /> <Label className="text-muted-foreground">Calle París, Las Mercedes. Caracas</Label>
              <div className="aspect-square md:aspect-[4/5] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648730474!2d-73.98656668451642!3d40.75895937932695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635186524347!5m2!1sen!2sus"
                  width="100%"
                  height="82%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
                <br />
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Escribe tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Escribe tu correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Escribe un teléfono de contacto"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder=""
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[100px]"
                />
              </div>
              <Button type="submit" className="w-full">Enviar</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}