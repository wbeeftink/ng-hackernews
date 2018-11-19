export class Config {
  public static titlePrefix: string = 'NgHackernews';
  public static titleSeparator: string = '|';
  public static dateFormat: string = 'EEEE, MMMM d, h:mm a';

  public static pointsMapping: {[k: string]: string} = {
    '=0': '0 points',
    '=1': '1 point',
    'other': '# points'
  };

  public static commentsMapping: {[k: string]: string} = {
    '=0': '0 comments',
    '=1': '1 comment',
    'other': '# comments'
  };

  public static getTitle(title: string): string {
    return `${this.titlePrefix} ${this.titleSeparator} ${title}`
  }
}
