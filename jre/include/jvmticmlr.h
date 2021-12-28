

#ifndef _JVMTI_CMLR_H_
#define _JVMTI_CMLR_H_

enum {
    JVMTI_CMLR_MAJOR_VERSION_1 = 0x00000001,
    JVMTI_CMLR_MINOR_VERSION_0 = 0x00000000,

    JVMTI_CMLR_MAJOR_VERSION   = 0x00000001,
    JVMTI_CMLR_MINOR_VERSION   = 0x00000000

    /*
     * This comment is for the "JDK import from HotSpot" sanity check:
     * version: 1.0.0
     */
};

typedef enum {
    JVMTI_CMLR_DUMMY       = 1,
    JVMTI_CMLR_INLINE_INFO = 2
} jvmtiCMLRKind;


typedef struct _jvmtiCompiledMethodLoadRecordHeader {
  jvmtiCMLRKind kind;     /* id for the kind of info passed in the record */
  jint majorinfoversion;  /* major and minor info version values. Init'ed */
  jint minorinfoversion;  /* to current version value in jvmtiExport.cpp. */

  struct _jvmtiCompiledMethodLoadRecordHeader* next;
} jvmtiCompiledMethodLoadRecordHeader;


typedef struct _PCStackInfo {
  void* pc;             /* the pc address for this compiled method */
  jint numstackframes;  /* number of methods on the stack */
  jmethodID* methods;   /* array of numstackframes method ids */
  jint* bcis;           /* array of numstackframes bytecode indices */
} PCStackInfo;


typedef struct _jvmtiCompiledMethodLoadInlineRecord {
  jvmtiCompiledMethodLoadRecordHeader header;  /* common header for casting */
  jint numpcs;          /* number of pc descriptors in this nmethod */
  PCStackInfo* pcinfo;  /* array of numpcs pc descriptors */
} jvmtiCompiledMethodLoadInlineRecord;


typedef struct _jvmtiCompiledMethodLoadDummyRecord {
  jvmtiCompiledMethodLoadRecordHeader header;  /* common header for casting */
  char message[50];
} jvmtiCompiledMethodLoadDummyRecord;

#endif
