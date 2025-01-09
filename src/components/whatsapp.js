export const handleWhatsAppClick = (productName) => {
    const phoneNumber = "917306890297";
    const message = `Hi there! I'm interested in learning more about the product: ${encodeURIComponent(
      productName
    )}.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };