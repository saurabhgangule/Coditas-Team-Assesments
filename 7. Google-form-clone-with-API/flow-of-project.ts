/**
 *  1. Que. input box -> at first no need to add functionality to this
 *  2. Quetion Option type (buttons) --> add click event
 *                                   --> identify if option is enabled
 *                                   --> (if : enabled) show [add, remove] buttons
 *                                        (add-click)   --> add click-event
 *                                                      --> to append option-input-box FOR EACH click
 *
 *                                        (remove-click)--> add click-event
 *                                                      --> to remove last available option-input-box FOR EACH click
 *
 *                                   --> (else :) hide [add, remove] buttons
 *                                                      --> set the innerHTML of options-parent-element to null/empty
 *  3. Save button (type: submit)   --> add click/submit event
 *                                  --> get the value of Question input box value
 *                                  --> get the values of each available option
 *                                  --> get the value of button type or que type
 *                                  --> and appendChild to the display question section
 * */
