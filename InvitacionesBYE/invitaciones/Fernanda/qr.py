import qrcode

# Enlace que quieres convertir en QR
url = "https://forms.gle/A5prPusEjJo75zXN9"

# Crear el código QR
img = qrcode.make(url)

# Guardarlo como imagen
img.save("qr_formulario.png")

print("✅ QR generado con éxito: qr_formulario.png")