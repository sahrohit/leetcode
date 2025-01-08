/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

    // Checking if the list is already empty
    if (!lists || lists?.length === 0) {
        return null;
    }

    // Loop until the list only have a single linkedlist
    while (lists.length > 1) {
        let mergedLists = [];

        // Merging first two list, then thrid and fourth until the end of the list
        for (let i = 0; i < lists.length; i += 2) {
            mergedLists.push(merge2Lists(lists[i], (i + 1 < lists.length) ? lists[i + 1] : null))
        }

        // Updating the list to the mergedList
        lists = mergedLists;
    }

    // Only one item will remain on this list, return that
    return lists[0]
};

function merge2Lists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    // Create a new linkedlist
    let dummy = new ListNode()

    // Reassign the tail pointer, because we need to return the head of the list
    let tail = dummy

    // Loop until both the list have values
    while (list1 && list2) {

        // If list1 value is current val is smaller than list2 val
        if (list1.val < list2.val) {

            //  we add the smaller value to the new list
            tail.next = list1
            list1 = list1.next;
        } else {

            // if l2 is smaller, we push l2 to the new list
            tail.next = list2;
            list2 = list2.next
        }

        //  we increament the new list pointer during each loop
        tail = tail.next
    }

    // Only one of list1 or list2 remains
    // whichever remains we point our new node tail to the start of remaining list
    if (list1) {
        tail.next = list1
    } else if (list2) {
        tail.next = list2
    }

    // return the start pointer of the mergedList
    return dummy.next;
}