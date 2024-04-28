document.getElementById('deleteButton').addEventListener('click', async function() {
    const webhookUrl = document.getElementById('webhookUrlInput').value.trim();

    if (webhookUrl === '') {
        displayResponseMessage('Please enter a valid Webhook URL.', 'error');
        return;
    }

    try {
        await deleteWebhook(webhookUrl);
        displayResponseMessage('Webhook deleted successfully.', 'success');
    } catch (error) {
        displayResponseMessage('Failed to delete webhook. Please check the URL and try again.', 'error');
    }
});

async function deleteWebhook(webhookUrl) {
    const response = await axios.delete(webhookUrl);
    return response.data;
}

function displayResponseMessage(message, messageType) {
    const responseMessageElement = document.getElementById('responseMessage');
    responseMessageElement.textContent = message;

    if (messageType === 'error') {
        responseMessageElement.style.color = 'red';
    } else if (messageType === 'success') {
        responseMessageElement.style.color = 'green';
    }

    setTimeout(() => {
        responseMessageElement.textContent = '';
    }, 3000);
}
