function getCurrentTime(): string {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();

  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
}

export default function calculateTimeUntilMedication(medicationTime: string): string {
  const [currentHour, currentMinute] = getCurrentTime().split(":").map(Number);
  const [medicationHour, medicationMinute] = medicationTime.split(":").map(Number);

  const currentDateTime = new Date();
  currentDateTime.setHours(currentHour, currentMinute, 0);

  const medicationDateTime = new Date();
  medicationDateTime.setHours(medicationHour, medicationMinute, 0);

  if (currentDateTime > medicationDateTime) {
    medicationDateTime.setDate(medicationDateTime.getDate() + 1); // Add one day if the current time has already passed the medication time
  }

  const timeDiffMillis = medicationDateTime.getTime() - currentDateTime.getTime();
  const timeDiffHours = Math.floor(timeDiffMillis / (1000 * 60 * 60));
  const timeDiffMinutes = Math.floor((timeDiffMillis % (1000 * 60 * 60)) / (1000 * 60));

  return `${timeDiffHours.toString().padStart(2, "0")}:${timeDiffMinutes.toString().padStart(2, "0")}`;
}
