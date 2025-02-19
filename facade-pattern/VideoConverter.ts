import { BitrateReader } from './BitrateReader';
import { CodecFactory } from './CodecFactory';
import { MPEG4CompressionCodec } from './MPEG4CompressionCodec';
import { OggCompressionCodec } from './OggCompressionCodec';
import { Video } from './Video';

class VideoConverter {
    convertVideo(filename: string, format: string): Video {
        const file = new Video(filename);
        const videoFile = new File([file.name], file.name);
        const sourceCodec = new CodecFactory.extract(videoFile);
        let destinationCodec: any;
        if (format === 'mp4') {
            destinationCodec = new MPEG4CompressionCodec();
        } else {
            destinationCodec = new OggCompressionCodec();
        }
        let buffer = BitrateReader.read(filename, sourceCodec);
        let result = BitrateReader.convert(buffer, destinationCodec);
        return new Video(result);
    }
}

console.log('Client: converting video...', new VideoConverter().convertVideo('video', 'mp4'));