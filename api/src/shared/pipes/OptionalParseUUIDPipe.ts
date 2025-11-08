import { ArgumentMetadata, ParseUUIDPipe, PipeTransform } from '@nestjs/common';

export class OptionalParseUUIDPipe implements PipeTransform {
  async transform(value: unknown, metadata: ArgumentMetadata) {
    // If query param is not present, return undefined so callers
    // don't receive an empty string that would be parsed as an invalid UUID
    if (typeof value === 'undefined') {
      return undefined;
    }

    // Delegate validation to ParseUUIDPipe when a value exists
    const parseUuid = new ParseUUIDPipe();
    return parseUuid.transform(value as string, metadata) as
      | Promise<string>
      | string;
  }
}
