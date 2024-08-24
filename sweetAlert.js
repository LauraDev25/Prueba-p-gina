function agregarAlCarrito() {
    Swal.fire({
      title: "Ok!",
      text: "Agregado al Carrito Correctamente",
      footer: "Revisa el Carrito",
      icon: "success"
    });
  }


  function vaciarCarritoBoton() {
    Swal.fire({
      title: "Exitoso",
      icon: "success",
      footer: "Carrito Vaciado!",
      showClass: {
        popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
      },
      hideClass: {
        popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
      }
    });
  }