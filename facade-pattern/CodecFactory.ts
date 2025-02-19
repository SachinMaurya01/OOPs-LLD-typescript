export class CodecFactory {
  public static extract(file: File): void {
    const codec = file.name.slice(file.name.lastIndexOf('.') + 1);
    if (codec === 'mp4') {
      console.log('CodecFactory: extracting mpeg4');
    } else {
      console.log('CodecFactory: extracting ogg');
    }
  }
}