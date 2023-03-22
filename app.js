const ipAddressElement = document.getElementById('ip-address');

async function getIpAddress() {
  const response = await fetch('api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
}

async function displayIpAddress() {
  const ipAddress = await getIpAddress();
  ipAddressElement.textContent = `Your public IP address is: ${ipAddress}`;
}

displayIpAddress();
