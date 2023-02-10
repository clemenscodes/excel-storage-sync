// async function downloadExcelFile() {
//   const data = await file.createReadStream().toString();
//   const workbook = XLSX.read(data, { type: 'binary' });
//   const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//   const excelData = XLSX.utils.sheet_to_json(worksheet);
//   return excelData;
// }

/* eslint-disable-next-line */
export interface StorageProps {}

export function Storage(props: StorageProps) {
  return <h1>Welcome to Storage!</h1>;
}

export default Storage;
