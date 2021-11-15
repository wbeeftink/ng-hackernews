export class Config {
  static titlePrefix = "NgHackernews";
  static titleSeparator = "|";
  static dateFormat = "EEEE, MMMM d, h:mm a"; // e.g. Sunday, January 18, 10:26 PM

  static pointsMapping: { [k: string]: string } = {
    "=0": "0 points",
    "=1": "1 point",
    other: "# points",
  };

  static commentsMapping: { [k: string]: string } = {
    "=0": "0 comments",
    "=1": "1 comment",
    other: "# comments",
  };

  static getTitle(title: string): string {
    return `${this.titlePrefix} ${this.titleSeparator} ${title}`;
  }
}
