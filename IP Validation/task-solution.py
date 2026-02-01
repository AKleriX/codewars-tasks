def is_valid_IP(strng):
    nums = strng.split(".")
    
    if len(nums) != 4:
        return False
    
    for n in nums:
        if not n.isdigit() or (len(n) > 1 and n[0] == "0") or not (0 <= int(n) <= 255):
            return False
        
    return True