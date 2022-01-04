/*
 * Copyright 2019 - 2020 Anton Tananaev (anton@traccar.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.traccar.config;

import java.util.List;

public class ConfigKey<T> {

    private final String key;
    private final List<KeyType> types;
    private final T defaultValue;

    ConfigKey(String key, List<KeyType> types) {
        this(key, types, null);
    }

    ConfigKey(String key, List<KeyType> types, T defaultValue) {
        this.key = key;
        this.types = types;
        this.defaultValue = defaultValue;
    }

    String getKey() {
        return key;
    }

    public List<KeyType> getTypes() {
        return types;
    }

    public T getDefaultValue() {
        return defaultValue;
    }

}
