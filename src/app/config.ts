export class Config {
  static titlePrefix: string = 'NgHackernews';
  static titleSeparator: string = '|';
  static dateFormat: string = 'EEEE, MMMM d, h:mm a';

  static pointsMapping: { [ k: string ]: string } = {
    '=0': '0 points',
    '=1': '1 point',
    'other': '# points'
  }

  static commentsMapping: { [ k: string ]: string } = {
    '=0': '0 comments',
    '=1': '1 comment',
    'other': '# comments'
  }

  static getTitle(title: string): string {
    return `${this.titlePrefix} ${this.titleSeparator} ${title}`
  }
}
