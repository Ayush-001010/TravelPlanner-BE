export default class AWSService {
  getImageURL(imageKey: string): string {
    return "https://"+process.env.AWS_CloudFront_Domain + "/" + imageKey;
  }
}
