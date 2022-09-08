export function formatPublicKey(pk: string) {
  const prefix = pk.substring(0, 4);
  const lengthOfPK = pk.length;
  const suffiex = pk.substring(lengthOfPK - 4, lengthOfPK);
  return `${prefix}...${suffiex}`;
}
