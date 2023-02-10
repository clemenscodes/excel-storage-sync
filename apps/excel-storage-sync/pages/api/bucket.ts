import { Storage } from '@google-cloud/storage';
import XLSX from 'xlsx';

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });
  const bucket = storage.bucket(process.env.BUCKET_NAME);
  const file = bucket.file('Mappe.xlsx');
  const data = await file.download();
  const workbook = XLSX.read(data[0], { type: 'buffer' });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const excelData = XLSX.utils.sheet_to_json(worksheet);
  res.status(200).json(excelData);
}
