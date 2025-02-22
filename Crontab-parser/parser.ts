interface CronData {
  minute: number[];
  hour: number[];
  dayOfMonth: number[];
  month: number[];
  dayOfWeek: number[];
}

export function parseCronString(cronString: string): CronData {
  const cronParts = cronString.split(' ');
  if(cronParts.length !== 5) {
    throw new Error('Invalid cron string');
  }
  const cronData: CronData = {
    minute: parseMinutes(cronParts[0]),
    hour: parseHours(cronParts[1]),
    dayOfMonth: parseDaysOfMonth(cronParts[2]),
    month: parseMonths(cronParts[3]),
    dayOfWeek: parseDaysOfWeek(cronParts[4]),
  };
  return cronData;
}

export function parseMinutes(minutes: string): number[] {
  
}

function parseHours(hours: string): number[] {
  
}

function parseDaysOfMonth(daysOfMonth: string): number[] {
  
}

function parseMonths(months: string): number[] {
  
}

function parseDaysOfWeek(daysOfWeek: string): number[] {
  
}