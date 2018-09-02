import forge from 'node-forge';

const API_ENDPOINT = 'http://192.168.1.104:4200';

const registerIdentity = async () => {
  forge.options.usePureJavaScript = true;
  const keypair = forge.pki.rsa.generateKeyPair({bits: 512, e: 0x10001});
  const keypairPem = {
    publicKey: forge.pki.publicKeyToPem(keypair.publicKey),
    privateKey: forge.pki.privateKeyToPem(keypair.privateKey),
  };
  console.log('keypairPem', keypairPem);

  const identity = await postData(`${API_ENDPOINT}/did/register`, { publicKey: keypairPem.publicKey })
  console.log('identity', identity);

  return {
    did: identity.did,
    seed: identity.seed,
    keypairPem
  };
}

const postData = async (url, data) => {
  return fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'user-agent': 'TangleID Client',
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  })
  .then(response => response.json())
}

export default {
  registerIdentity
};