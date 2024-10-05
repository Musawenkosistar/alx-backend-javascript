/**
 * Represents a class room.
 */
export default class ClassRoom {
  /**
   * Creates a new @see {@link ClassRoom}.
   * @param {Number} maxStudentsSize - The maximum number of
   * students in the class.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  /**
   * Gets the maximum number of students in the class.
   * @returns {Number} The maximum number of students.
   */
  get maxStudentsSize() {
    return this._maxStudentsSize;
  }
}
