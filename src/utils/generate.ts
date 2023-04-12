
function generate(str: string): string {
  return str.replace(/[xy]/g, function (c: string) {
    const r = (Math.random() * 16) | 0;
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export default generate;
