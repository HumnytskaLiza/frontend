export interface contentType {
  id: string;
  filename: string;
  metadata: {
    path: string;
    folder: string;
    original_name: string;
  };
  chunkSize: number;
  length: number;
  uploadDate: string;
}
