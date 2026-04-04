document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.form');
  const submitBtn = form.querySelector('button[type="submit"]');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    formMessage.className = 'form-message';

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (response.ok) {
        formMessage.textContent = "✓ Message sent! I'll get back to you soon.";
        formMessage.className = 'form-message success';
        form.reset();
      } else {
        formMessage.textContent = "✗ Error: " + data.message;
        formMessage.className = 'form-message error';
      }
    } catch (error) {
      formMessage.textContent = "✗ Something went wrong. Please try again.";
      formMessage.className = 'form-message error';
    } finally {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
    }
  });

});