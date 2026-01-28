from concurrent.futures import ThreadPoolExecutor

def task_master(arr):
    with ThreadPoolExecutor(max_workers = len(arr)) as ex:
        return sum(ex.map(lambda fn: fn(), arr))