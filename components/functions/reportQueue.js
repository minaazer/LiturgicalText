import AsyncStorage from "@react-native-async-storage/async-storage";

const REPORT_QUEUE_KEY = "reportQueue";

const loadQueue = async () => {
  const raw = await AsyncStorage.getItem(REPORT_QUEUE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (err) {
    console.warn("Failed to parse report queue:", err);
    return [];
  }
};

const saveQueue = async (queue) => {
  await AsyncStorage.setItem(REPORT_QUEUE_KEY, JSON.stringify(queue));
};

export const enqueueReport = async (report) => {
  const queue = await loadQueue();
  queue.push(report);
  await saveQueue(queue);
};

export const removeReport = async (reportId) => {
  const queue = await loadQueue();
  const next = queue.filter((item) => item.reportId !== reportId);
  await saveQueue(next);
  return next;
};

export const getQueuedReports = async () => loadQueue();

export const replaceQueuedReports = async (queue) => saveQueue(queue);
