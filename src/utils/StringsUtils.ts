export class StringsUtils {
  public static firstLetterUpperCase = (word: string) => {
    return word[0].toUpperCase() + word.slice(1);
  };
}
